import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
        <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>08 de agosto de 2022</time>
                    <strong>Title</strong>
                    <p>Abstract</p>
                </a>
                <a href="#">
                    <time>08 de agosto de 2022</time>
                    <strong>Title</strong>
                    <p>Abstract</p>
                </a>
                <a href="#">
                    <time>08 de agosto de 2022</time>
                    <strong>Title</strong>
                    <p>Abstract</p>
                </a>
            </div>
        </main>
        </>
    );
}