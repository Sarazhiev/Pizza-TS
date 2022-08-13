import React, {useContext, useRef, useState} from 'react';
import styles from './search.module.scss'
import {GoSearch} from 'react-icons/go'
import {ImCross} from 'react-icons/im'
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";


const Search: React.FC = () => {
    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const [value, setValue] = useState('')

    const clearInputFunc = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current?.focus()
    }

    const updateSearchValue = React.useCallback (
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 600)
        ,[]
    )

    const changeInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)

    }

    return (
        <div className={styles.root}>
            <span className={styles.icon}><GoSearch/></span>
            <input ref={inputRef} value={value} onChange={(e) => changeInputFunc(e)} className={styles.input} placeholder='Поиск пицц...' type="text"/>
            {
                value && (
                    <span onClick={clearInputFunc} className={styles.cross}><ImCross/></span>
                )
            }
        </div>
    );
};

export default Search;