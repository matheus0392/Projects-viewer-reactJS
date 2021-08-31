import Stomp from 'stompjs';
import _ from 'lodash';

const backend = `http://localhost:8080`

export function connect(index, set) {
    let stompClient = Stomp.over(new SockJS(backend + '/gs-guide-websocket/'))
    stompClient.debug = null
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/topic/greetings/' + index, function (data) {
            let result = { index, message: [JSON.parse(data.body).content], client: stompClient }
            set(_.cloneDeep(result))
        });
    });
    return stompClient;
}

export function send(stompClient, message) {
    stompClient.send("/app/hello", {}, message)
}
