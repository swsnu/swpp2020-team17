"""recommend.py"""
import os
import random
import re
import kss
from gensim.models import doc2vec
from gensim.models.doc2vec import TaggedDocument
from gensim.models import Phrases
from gensim.models.phrases import Phraser

class Recommend:
    '''Recommend'''

    def __init__(self, ref=1):
    #init
        self.ref = ref

    def process(self, docs):
        '''process'''

        sentence_tokenized_text = []
        line = str(self.ref)
        line = docs.strip()
        for sent in kss.split_sentences(line):
            sentence_tokenized_text.append(sent.strip())

        punct = "/-'?!.,#$%\'()*+-/:;<=>@[\\]^_`{|}~" + '""“”’' + '∞θ÷α•à−β∅³π‘₹´°£€×™√²—–&'
        punct_mapping = {"‘": "'", "₹": "e", "´": "'", "°": "", "€": "e", "™": "tm", "√": " sqrt ",
                         "×": "x", "²": "2", "—": "-", "–": "-", "’": "'", "_": "-", "`": "'",
                         '“': '"', '”': '"', "£": "e", '∞': 'infinity', 'θ': 'theta',
                         '÷': '/', 'α': 'alpha', '•': '.', 'à': 'a', '−': '-', 'β': 'beta', '∅': '',
                         '³': '3', 'π': 'pi', }

        def clean_punc(text, punct, mapping):
            '''clean_punc'''
            for punc in mapping:
                text = text.replace(punc, mapping[punc])

            for punc in punct:
                text = text.replace(punc, f' {punc} ')

            specials = {'\u200b': ' ', '…': ' ... ', '\ufeff': '', 'करना': '', 'है': ''}
            for spec in specials:
                text = text.replace(spec, specials[spec])

            return text.strip()

        cleaned_corpus = []
        for sent in sentence_tokenized_text:
            cleaned_corpus.append(clean_punc(sent, punct, punct_mapping))

        def clean_text(texts):
            '''clean_text'''
            corpus = []
            # for i in range(0, len(texts)):
            for i, text in enumerate(texts):
                review = str(i)
                review = re.sub(r'[@%\\*=()/~#&\+á?\xc3\xa1\-\|\.\:\;\!\-\,\_\~\$\'\"]', '',
                                str(text))  # remove punctuation
                review = re.sub(r'\d+', '', review)  # remove number
                review = review.lower()  # lower case
                review = re.sub(r'\s+', ' ', review)  # remove extra space
                review = re.sub(r'<[^>]+>', '', review)  # remove Html tags
                review = re.sub(r'\s+', ' ', review)  # remove spaces
                review = re.sub(r"^\s+", '', review)  # remove space from start
                review = re.sub(r'\s+$', '', review)  # remove space from the end

                review = re.sub(r'\[[^)]*\]', '', review)
                review = re.sub(r'\([^)]*\)', '', review)
                review = re.sub(r'\<[^)]*\>', '', review)

                review = re.sub(r'[\<\>\(\)\[\]]', '', review)

                corpus.append(review)
            return corpus

        basic_preprocessed_corpus = clean_text(cleaned_corpus)
        basic_preprocessed_corpus = clean_text(basic_preprocessed_corpus)

        ### 불필요한 공백 및 특수문자 제거, 괄호와 그 안에 있는 내용 제거, 숫자 제거, 영문 제거 완료 ###

        token_ = [doc.split(" ") for doc in basic_preprocessed_corpus]
        # bigram = Phrases(token_, min_count=1, threshold=2, delimiter=b' ')

        # bigram_phraser = Phraser(bigram)
        bigram_phraser = Phraser(Phrases(token_, min_count=1, threshold=2, delimiter=b' '))

        bigram_token = []
        for sent in token_:
            bigram_token.append(bigram_phraser[sent])

        if len(bigram_token) > 0:
            return TaggedDocument(words=bigram_token[0], tags=[10000])

        return TaggedDocument(words=[], tags=[10000])

        # return ret

    def test(self, tag_id, tagged):
        """test"""
        path = str(self.ref)
        path = os.path.dirname(os.path.abspath(__file__))
        model_name = ''
        if tag_id == 1:
            model_name = 'model_Lo'
        elif tag_id == 2:
            model_name = 'model_HS'
        elif tag_id == 3:
            model_name = 'model_MP'
        model = doc2vec.Doc2Vec.load(path + '/' + model_name)

        vec = [model.infer_vector(content[0]) for content in tagged]

        answer = model.docvecs.most_similar(vec, topn=5)
        return answer


    def recommend_with(self, tag_id, interest_contents):
        """recommend_with"""
        recommendation = []  # list of post ids recommended
        max_id = 1
        if tag_id == 1:
            max_id = 980
        elif tag_id == 2:
            max_id = 1421
        elif tag_id == 3:
            max_id = 869

        if len(interest_contents) == 0:
            recommendation = [int(random.random() * max_id) for i in
                              range(5)]  # random recommendation
        else:
            tagged = []
            for content in interest_contents:
                tagged.append(self.process(content))

            res = self.test(tag_id, tagged)  # 5 recommended post ids
            recommendation = [int(content[0] / 2) for content in res]

        # HS starts from 0  // 2
        # LoL starts from 1421  // 1
        # MP starts from 2401  // 3

        if tag_id == 1:
            recommendation = list(map(lambda x: x + 1421, recommendation))
        if tag_id == 3:
            recommendation = list(map(lambda x: x + 2401, recommendation))

        return recommendation
