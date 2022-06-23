import React, { useMemo } from 'react'
import styles from './comment.module.css'
import { Send } from 'react-feather'
import useAuth from '@hooks/useAuth'

export default function Comment(props) {
    const p = props
    const [isAuthenticated] = useAuth()
    const renderInput = useMemo(() => {
        return (
            <input
                type="text"
                placeholder="Harika bir yazi olmus..."
                className={styles.commentInput}
                value={p.comment}
                onChange={(e) => {
                    p.handleComment(e)
                }}
            />
        )
    }, [props])

    const isAvaibleComment = () => {
        if (isAuthenticated) {
            return (
                <div className={styles.inputWrapper}>
                    {renderInput}
                    <button className={styles.btnWrapper} onClick={() => p.submitComment()}>
                        <Send />
                    </button>
                </div>
            )
        }
    }

    return (
        <div className={styles.commentWrapper}>
            <span>Yorumlar</span>
            {isAvaibleComment()}

            <div className={styles.commentListWrapper}>
                {p.commentList?.map((d) => (
                    <div className={styles.comment}>
                        <span className={styles.author}>{d?.comment_author}</span>
                        <p className={styles.content}>{d?.comment_content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
