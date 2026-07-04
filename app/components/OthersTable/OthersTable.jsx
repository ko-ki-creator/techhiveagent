import React from 'react'
import styles from './OthersTable.module.css'
import Image from 'next/image'

export default function OthersTable() {
    return (
        <div className={styles.others_table_wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.title}>評価軸</th>
                        <th>SaaSベンダー</th>
                        <th>SIer</th>
                        <th className={` ${styles.logo} ${styles.radius} `}>
                            <Image
                                src='/images/asikaze_logo_full.svg'
                                alt='株式会社Asikazeのロゴ'
                                width={155}
                                height={28}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.title}>HR業務の理解</td>
                        <td><span>◎</span></td>
                        <td><span>△</span></td>
                        <td className={styles.logo}><span>◎</span></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.title}>AI実装力</td>
                        <td><span>⚪︎</span></td>
                        <td><span>△</span></td>
                        <td className={styles.logo}><span>◎</span></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.title}>人材アサイン</td>
                        <td><span>×</span></td>
                        <td><span>◎</span></td>
                        <td className={styles.logo}><span>◎</span></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.title}>撤退設計（自走化支援）</td>
                        <td><span>◎</span></td>
                        <td><span>×</span></td>
                        <td className={styles.logo}><span>◎</span></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.title}>継続改善</td>
                        <td><span>△</span></td>
                        <td><span>×</span></td>
                        <td className={styles.logo}><span>◎</span></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.title}>月額の費用感</td>
                        <td><span>低</span></td>
                        <td><span>高（人月積み）</span></td>
                        <td className={styles.logo}><span>低〜中</span></td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.level}>
                <div className={styles.level_group}>
                    <span>◎</span>
                    <p>強み</p>
                </div>
                <div className={styles.level_group}>
                    <span>⚪︎</span>
                    <p>対応可</p>
                </div>
                <div className={styles.level_group}>
                    <span>△</span>
                    <p>部分的</p>
                </div>
                <div className={styles.level_group}>
                    <span>×</span>
                    <p>低〜中</p>
                </div>
            </div>
        </div>
    )
}
