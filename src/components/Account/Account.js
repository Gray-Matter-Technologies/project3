import React, { useState } from 'react';
import styles from './Account.module.css'

function Account() {
    var initState = JSON.parse(localStorage.getItem('account') || '{}');
    const [accountState, setAccount] = useState(initState);

    const handleFormSubmit=() => {
        localStorage.setItem('account',JSON.stringify(accountState))
    }

    return (
        <form className={styles.account__container} onSubmit={ (e)=> handleFormSubmit() }>
            <h2 className={styles.account__title}>My details</h2>
            <div className={styles.avatar__row}>
                <div className={styles.avatar}></div>
                    <label className={styles.myfile}>Upload photo
                        <input type="file" id="myFile" name="filename" />
                    </label>
                <div className={styles.myfile__text}>size no more than 2MB, png/jpeg...</div>
            </div>
            <div className={styles.first__row}>
                <div>First name:{accountState.firstname}
                    <input type="text" onChange={ (e)=> setAccount({ ...accountState, firstname: e.target.value }) } value={accountState.firstname} />
                </div>
                <div>Last name:
                    <input type="text" onChange={ (e) => setAccount ({ ...accountState, lastname: e.target.value }) } value={accountState.lastname} />
                </div>
                <div>Mobile number:
                    <input type="text" onChange={ (e) => setAccount({ ...accountState, mobile: e.target.value }) } value={accountState.mobile} />
                </div>
            </div>
            <div className={styles.second__row}>
                <div>Email:
                    <input type="text"  onChange={ (e) => setAccount({ ...accountState, email: e.target.value }) } value={accountState.email} />
                </div>
                <div>Location:
                    <input type="text" onChange={ (e) => setAccount({ ...accountState, location: e.target.value }) } value={accountState.location} />
                </div>
            </div>
            <div className={styles.third__row}>
                <div>ABN:
                    <input type="text" onChange={ (e) => setAccount({ ...accountState, abn:e.target.value }) } value={accountState.abn} />
                </div>
                <div>Company Name:
                    <input type="text" onChange={ (e) => setAccount({ ...accountState, company: e.target.value }) } value={accountState.company} />
                </div>
            </div>
            <button type="submit" className={styles.submit}>Save</button>
        </form>
    );
}



export default Account;



