import React from 'react'
import styles from './RoleTable.module.css'

export default function RoleTable() {
    return (
        <div className={styles.role_table_wrapper}>
            <p className={styles.role_table_title}>役割×担当フェーズ</p>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={` ${styles.role} ${styles.title} `}>ROLE</th>
                        <th className={styles.map}>MAP</th>
                        <th className={styles.build}>BUILD</th>
                        <th className={styles.scale}>SCALE</th>
                        <th className={styles.operation}>稼働形態</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.title}>HR導入コンサルタント</td>
                        <td>
                            <span className={styles.map_blue}></span>
                        </td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            週2-3日
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>FDE／AI Agent エンジニア</td>
                        <td>
                            <span className={styles.map_blue}></span>
                        </td>
                        <td>
                            <span className={styles.build_purple}></span>
                        </td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            リモート中心
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>Skill ライター</td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            <span className={styles.build_purple}></span>
                        </td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            ハイブリッド
                        </td>
                    </tr>

                    <tr className={styles.tr}>
                        <td>AI管理者</td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            <span className={styles.circle}></span>
                        </td>
                        <td>
                            <span className={styles.build_green}></span>
                        </td>
                        <td>
                            リモート
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.supplement}>
                <div className={styles.main_charge}>
                    <span className={styles.gray_circle}></span>
                    <p>主担当</p>
                </div>
                <div className={styles.support}>
                    <span className={styles.circle}></span>
                    <p>サポート</p>
                </div>
            </div>
        </div>
    )
}
