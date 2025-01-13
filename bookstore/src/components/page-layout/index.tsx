import {PropsWithChildren} from 'react';
import Header from '../header';
import style from './style.module.scss';

const PageLayout = ({children}: PropsWithChildren) => {
  return (
    <div>
      <Header/>
      <div className={style.pageWrapper}>
        {children}
      </div>
    </div>
  )
}

export default PageLayout;