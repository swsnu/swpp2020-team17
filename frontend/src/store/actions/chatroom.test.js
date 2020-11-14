import axios from 'axios';
import store from '../store';
import * as actionCreators from './chatroom';

const stubChatroom1 = {
    ID: 1, 
    toggleGlobal: true, 
    title: 'chatroom1', 
    tag: 1, 
    maxPersonnel: 10, 
    discordLink: null,
}
const stubChatroom2 = {
    ID: 2, 
    toggleGlobal: false, 
    title: 'chatroom2', 
    tag: 2, 
    maxPersonnel: 20, 
    discordLink: null,
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it ('getCookie should be handled correctly', () => {
        document.cookie = 'temp_cookie';
        expect(actionCreators.getCookie('csrftoken')).toBe(null);
    });

    it(`getChatroomList should fetch chatrooms correctly`, (done) => {
        const stubChatrooms = [stubChatroom1, stubChatroom2];
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubChatrooms
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getChatroomList()).then(() => {
            const newState = store.getState();
            expect(newState.chat.chatroomList).toBe(stubChatrooms);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('createChatroom should create chatroom correctly', (done) => {
        const spy = jest.spyOn(axios, 'post')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                const result = {
                    status: 200,
                    data: stubChatroom1
                };
                resolve(result);
                });
            })
    
        store.dispatch(actionCreators.createChatroom(stubChatroom1)).then(() => {
            const newState = store.getState();
            expect(newState.chat.selectedChatroom).toBe(stubChatroom1);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it(`getChatroom should fetch chatroom correctly`, (done) => {
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 200,
                        data: stubChatroom1
                    };
                    resolve(result);
                });
            })

        store.dispatch(actionCreators.getChatroom(1)).then(() => {
            const newState = store.getState();
            expect(newState.chat.selectedChatroom).toBe(stubChatroom1);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    
    it('putChatroom should put chatroom correctly', (done) => {
        const spy = jest.spyOn(axios, 'put')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                    status: 200,
                    data: stubChatroom1
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.putChatroom(stubChatroom1)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })

    it('deleteChatroom should delete chatroom correctly', (done) => {
        const spy = jest.spyOn(axios, 'delete')
        .mockImplementation(url => {
            return new Promise((resolve, reject) => {
                const result = {
                status: 200,
                data: stubChatroom1
                };
                resolve(result);
            });
        })
        store.dispatch(actionCreators.deleteChatroom(1)).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    })
  
})