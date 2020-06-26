import React from "react";
import s from './messagetab.module.css'

type MessageType = {
    message: string
    name: string
    time: string
    isRead: boolean
};

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.wrapper__inner}>
            <div className={s.wrapper__ava}>
                <img src="http://fushigi-chikara.jp/wp-content/uploads/2017/11/687028-225x3001-150x150.jpg" alt=""/>
            </div>
            <div className={s.wrapper__message}>
                <div className={s.message_item}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.post}>
                        {props.message}
                    </div>
                </div>
                <div className={s.message_time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;