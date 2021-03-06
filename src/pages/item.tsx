import React, { FC } from 'react';
import styles from './hero.less';
import { connect, ItemModelState, ConnectProps } from 'umi';


interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = (props) => { 
  console.log(props.item);
  return (
    <div>
      <h1 className={styles.title}>Page Item</h1>
      <h2>This is {JSON.stringify(props.item)}</h2>
    </div>
  );
}
export default connect(({ item }: { item: ItemModelState }) => ({ item }))(Item);