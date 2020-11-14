import axios from 'axios';
import store from '../store';
import * as actionCreators from './user';

const stubUser1 = {
    ID: 1, 
    username: 'User1',
    login: true,
    avatar: null, 
    chatroom: -1, 
    friendList: [],
    postList: [1, 5],
    shallWeRoomList: [1, 2], 
    watchedPostList: [1, 2, 3], 
    tagList: [5]
}
const stubUser2 = {
    ID: 2, 
    username: 'User2',
    login: false,
    avatar: null, 
    chatroom: 1, 
    friendList: [1],
    postList: [],
    shallWeRoomList: [3], 
    watchedPostList: [2, 3], 
    tagList: [4]
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it ('getCookie should be handled correctly', () => {
        document.cookie = 'temp_cookie';
        expect(actionCreators.getCookie('csrftoken')).toBe(null);
    });

    it ('login should handle login correctly', (done) => {
        const spy = jest.spyOn(axios, 'get')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                    status: 200,
                    data: null,
                  };
                resolve(result);
            })
        })
        store.dispatch(actionCreators.login()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        })
    });

    it(`getUserList should fetch users correctly`, (done) => {
        const stubUsers = [stubUser1, stubUser2];

        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubUsers
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getUserList()).then(() => {
            const newState = store.getState();
            expect(newState.ur.userList).toBe(stubUsers);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it(`getCurrentUser should fetch current user correctly`, (done) => {
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubUser1
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getCurrentUser()).then(() => {
            const newState = store.getState();
            expect(newState.ur.currentUser).toBe(stubUser1);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it(`getUser should fetch user correctly`, (done) => {
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubUser1
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getUser(1)).then(() => {
            const newState = store.getState();
            expect(newState.ur.selectedUser).toBe(stubUser1);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    
    it('putUser should put user correctly', (done) => {
        const spy = jest.spyOn(axios, 'put')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubUser1
                };
                resolve(result);
            });
        })

        store.dispatch(actionCreators.putUser(stubUser1)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })
  
})