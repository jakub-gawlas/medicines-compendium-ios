import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Item from 'components/Item';
import Search from 'components/Search';

class ListItems extends Component{

  constructor(props, context){
    super(props, context);
    this._renderRow = this._renderRow.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderRow(dataMobx){
    const data = dataMobx.toJS();
    const { selected, id, ...rest} = data;
    const { onPressItem } = this.props;
    return(
      <Item data={dataMobx} onPress={() => onPressItem(id)} />
    );
  }

  _renderHeader(){
    const { onSearchChange } = this.props;
    return(
      <Search onChangeText={onSearchChange} />
    );
  }

  render(){
    const { items, onSearchChange, onPressItem } = this.props;
    return(
      <ListView
        dataSource={items}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        style={styles.container}
        enableEmptySections
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListItems;