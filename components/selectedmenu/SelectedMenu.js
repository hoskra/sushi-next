import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import model from './model';
import Link from 'next/link'

// static copyToClipboard() {
//   document.execCommand('copy');
// }

export default function SelectedMenu(props) {
// class SelectedMenu extends Component {
// class SelectedMenu extends Component {

  SelectedMenu.copyToClipboard = () => {
    document.execCommand('copy');
  }

  const [id, setId] = useState(props.children.substring(0, 20).replace(' ', '_'));
  const [subMenu, setSubMenu] = useState({
    display: 'none',
  });

  const [caret, setCaret] = useState({
    display: 'none',
  });
  const [selectedText, setSelectedText] = useState("");



  // constructor(props) {
  //   super(props);
  //   addItems = this.addItems.bind(this);
  //   this.handleSelected = this.handleSelected.bind(this);
  //   this.removeSelected = this.removeSelected.bind(this);
  //   this.state = {
  //     subMenu : {
  //       display: 'none',
  //     },
  //     caret: {
  //       display: 'none',
  //     },
  //     selectedText: '',
  //   }
  //   this.items = this.props.items;
  //   this.id = this.props.children.substring(0, 20).replace(' ', '_');
  // }

  useEffect(() => {

  // componentDidMount() {
    document.addEventListener('click', removeSelected);
    document.getElementById(`_selectedText${id}`).addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${id}`).addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${id}`).onmousedown = (e) => {
      e.preventDefault();
    };
    document.getElementById(`_selectedText${id}`).addEventListener('mouseup', handleSelected);

  // componentWillUnmount() {
    return () => {
    document.removeEventListener('click', removeSelected);
    document.getElementById(`_selectedText${id}`).removeEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${id}`).removeEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${id}`).onmousedown = (e) => {
      e.preventDefault();
    };
    document.getElementById(`_selectedText${id}`).removeEventListener('mouseup', handleSelected);
    }
  }, [])

  const addItems = () => {
    const items = props.items.filter(e => Object.keys(model).includes(e));
    const links = props.items.map((e, i) => {
      if (!model[e]) {
        throw new Error(`Invalid item : ${e}`);
      } else if (e === 'add') {
        const href = model[e].link + selectedText;
        return (
          <Link href={"/term?tid=" + props.textbookId + "&pid=" + props.pageId + "&name=" + selectedText}>
            <a
              key={e}
              tabIndex={i}
            >
              { model[e].icon }
            </a>
          </Link>
        );
      } else {
        const href = model[e].link;
        return (
          <Link href={href}>
            <a
              key={e}
              tabIndex={i}
            >
              { model[e].icon }
            </a>
          </Link>
        );
      }
    }, this);
    return links;
  }
  
  const removeSelected = () => {
    setSubMenu({ display: 'none' });
    setCaret({ display: 'none' });
    setSelectedText('');
  }

  const handleSelected = () => {

  // handleSelected() {
    const s = document.getSelection();
    const r = s.getRangeAt(0);
    const p = r.getBoundingClientRect();
    if (p.left !== p.right) {
      const widthMenu = 40 * props.items.length;
      const middle = (p.right - p.left) / 2;
      const m = (p.left + middle - (widthMenu / 2)).toString();
      const t = (p.top - 50).toString();
      const tCarret = (p.top - 50 + 35).toString();
      const mCarret = (p.left + middle - 10).toString();

      setSubMenu({
          position: 'absolute',
          justifyContent: 'space-around',
          fontSize: 'x-large',
          backgroundColor: 'rgba(0,0,0,.8)',
          width: `${widthMenu.toString()}px`,
          height: '35px',
          left: `${m}px`,
          top: `${t}px`,
          borderRadius: '5px',
          display: 'flex',
        });
      setCaret({
          borderStyle: 'solid',
          borderWidth: '10px 10px 0px 10px',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
          borderTopColor: 'rgba(0,0,0,.8)',
          borderRightColor: 'transparent',
          width: '0px',
          height: '0px',
          display: 'block',
          position: 'absolute',
          top: `${tCarret}px`,
          left: `${mCarret}px`,
        });
      setSelectedText(s.toString());
    } else {
      setSubMenu({ display: 'none' });
      setCaret({ display: 'none' });
      setSelectedText('');
    }
  }

    return (<span>
      <span id={`_selectedText${id}`}>{props.children}</span>
      <span id={`_beacon${id}`} style={subMenu}>
        {addItems()}
      </span>
      <div style={caret} />
    </span>);
}

SelectedMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.string.isRequired,
};
// export default SelectedMenu;