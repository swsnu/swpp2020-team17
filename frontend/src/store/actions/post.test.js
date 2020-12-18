import axios from 'axios';
import store from '../store';
import * as actionCreators from './post';

const stubPost1 = {
    id: 1,
    image: null, 
    content: 'content 1', 
    author: 1, 
    tag: 1
}
const stubPost2 = {
    id: 1,
    image: null, 
    content: 'content 2', 
    author: 2, 
    tag: 2
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`getPostList should fetch posts correctly`, (done) => {
        const stubPosts = [stubPost1, stubPost2];

        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubPosts
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getPostList()).then(() => {
            const newState = store.getState();
            expect(newState.ps.postList).toBe(stubPosts);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it ('getCookie should be handled correctly', () => {
        document.cookie = 'temp_cookie';
        expect(actionCreators.getCookie('csrftoken')).toBe(null);
    });
    
    it('createPost should create post correctly', (done) => {
        const spy = jest.spyOn(axios, 'post')
          .mockImplementation(url => {
            return new Promise((resolve, reject) => {
              const result = {
                status: 200,
                data: stubPost1
              };
              resolve(result);
            });
          })
    
        store.dispatch(actionCreators.createPost(stubPost1)).then(() => {
            const newState = store.getState();
            expect(newState.ps.selectedPost).toBe(stubPost1);
            expect(spy).toHaveBeenCalledTimes(2);
            done();
        });
    });

    it(`getPost should fetch post correctly`, (done) => {
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubPost1
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getPost(1)).then(() => {
            const newState = store.getState();
            expect(newState.ps.selectedPost).toBe(stubPost1);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    
    it('putPost should put post correctly', (done) => {
        const spy = jest.spyOn(axios, 'put')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubPost1
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.putPost(stubPost1)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })

    it('deletePost should delete post correctly', (done) => {
        const spy = jest.spyOn(axios, 'delete')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubPost1
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.deletePost(1)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })

    it('recommendPostList should recommend posts correctly', (done) => {
        const spy = jest.spyOn(axios, 'get')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubPost1
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.recommendPostList()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })
})