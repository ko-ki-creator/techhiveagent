import React from 'react'
import styles from './RoleTable.module.css'

export default function RoleTable() {
    return (
        <div>
            <p className={styles.role_table_title}>役割×担当フェーズ</p>
            <table>
                <thead>
                    <tr>
                        <th>ROLE</th>
                        <th>MAP</th>
                        <th>BUILD</th>
                        <th>SCALE</th>
                        <th>稼働形態</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HR導入コンサルタント</td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            週2-3日
                        </td>
                    </tr>

                    <tr>
                        <td>FDE／AI Agent エンジニア</td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            リモート中心
                        </td>
                    </tr>

                    <tr>
                        <td>Skill ライター</td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            ハイブリッド
                        </td>
                    </tr>

                    <tr>
                        <td>AI管理者</td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            <span></span>
                        </td>
                        <td>
                            リモート
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
