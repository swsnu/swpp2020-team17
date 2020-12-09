import axios from 'axios';
import store from '../store';
import * as actionCreators from './tag';

const stubTag1 = {
    image: null,
    name: 'LOL'
}
const stubTag2 = {
    image: null,
    name: 'MapleStory'
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it ('getCookie should be handled correctly', () => {
        document.cookie = 'temp_cookie';
        expect(actionCreators.getCookie('csrftoken')).toBe(null);
    });
    
    it(`getPostList should fetch posts correctly`, (done) => {
        const stubTags = [stubTag1, stubTag2];

        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubTags
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getTagList()).then(() => {
            const newState = store.getState();
            expect(newState.tg.tagList).toBe(stubTags);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
  
})