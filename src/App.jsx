import { useEffect, useState } from 'react';
import mockMenu from './mock/menu.json';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';
import { FaPen } from 'react-icons/fa';
import Input from './components/Input';

const App = () => {
  const [menuData, setMenuData] = useState(mockMenu);
  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(itemsPerPage);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    // fetch('https://cdn-dev.preoday.com/senior-fe-menu-challenge.json', {
    //   // mode: 'no-cors',
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     // setMenuData(response);
    //   });
  }, []);

  const handleClickItem = (item) => {
    setSelectedItem(item);
  };

  const showItems = (menu) => {
    var items = [];
    for (var i = 0; i < records; i++) {
      items.push(
        <div className='wrapper-menu' key={menu[i].id}>
          <h3>{menu[i].name}</h3>
          <div className='wrapper-action-menu'>
            <FaPen
              className='menu-icon'
              onClick={() => handleClickItem(menu[i])}
            />
          </div>
        </div>
      );
    }
    return items;
  };

  const loadMore = () => {
    if (records === menuData.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setRecords(records + itemsPerPage);
      }, 300);
    }
  };

  console.log(selectedItem);
  return (
    <main className='container'>
      <div className='wrapper-dashboard'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          useWindow={false}
        >
          {showItems(menuData)}
        </InfiniteScroll>
      </div>
      {selectedItem && (
        <form className='form-menu'>
          <Input label='Name' name='name' value={selectedItem.name} />
          <Input
            label='Internal Name'
            name='name'
            value={selectedItem.internalName}
          />
          <Input label='URL' name='url' type='url' value={selectedItem.url} />
          <Input
            label='Price'
            name='price'
            type='number'
            value={selectedItem.price}
          />
        </form>
      )}
    </main>
  );
};

export default App;
