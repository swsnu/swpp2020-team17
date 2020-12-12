import axios from 'axios';
import store from '../store';
import * as actionCreators from './comment';

const stubComment = {
    id: 1, 
    author: 1,
    post: 1,
    content: "COMMENT_CONTENT",
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it ('getCookie should be handled correctly', () => {
        document.cookie = 'temp_cookie';
        expect(actionCreators.getCookie('csrftoken')).toBe(null);
    });

    it(`getCommentList should fetch comments correctly`, (done) => {
        const stubComments = [stubComment];
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubComments
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getCommentList()).then(() => {
            const newState = store.getState();
            expect(newState.cm.selectedCommentList).toBe(stubComments);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('createComment should create comment correctly', (done) => {
        const spy = jest.spyOn(axios, 'post')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                const result = {
                    status: 200,
                    data: stubComment
                };
                resolve(result);
                });
            })
    
        store.dispatch(actionCreators.createComment(stubComment)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('deleteComment should delete comment correctly', (done) => {
        const spy = jest.spyOn(axios, 'delete')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubComment
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.getCommentList()).then(() => {
            store.dispatch(actionCreators.deleteComment(stubComment)).then(() => {
                expect(spy).toHaveBeenCalledTimes(1);
                done();
            });
        });
        
    })
})