import React from 'react'
import { ReactComponent as Search } from '../../assets/Search/search.svg';
import { searchInfo, arrow } from './SearchInfo.module.scss';


export default function SearchInfo() {
  return (
      <a className={searchInfo} href="/">
        아이디(이메일)/비밀번호 찾기
        <Search className={arrow} />
      </a>
  )
}