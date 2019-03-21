import React from "react";
import Store from '../myStore'

function Clock() {

    const store = Store.useStore();

    function tick(){
        var date = new Date();

        store.set('time')(date.getTime());
        store.set('hours')(date.getHours());
        store.set('minutes')(date.getMinutes());
        store.set('seconds')(date.getSeconds());
    };

    var hours = store.get('hours');
    var minutes = store.get('minutes') < 10 ? '0' + store.get('minutes').toString() : store.get('minutes');
    var seconds = store.get('seconds');


    setInterval(tick, 1000);

    return <div className={'clock'}>{hours}<span className={'blink'}>:</span>{minutes}.{seconds}</div>
}

export default Clock;