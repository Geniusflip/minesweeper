import React, {useState} from 'react';

const SmileyFace = (props) => {
  const [state, setState] = useState('') 
  const otakuconfig = { // secret secret
    'c' : '(o v o)',
    'x' : '(x _ x)',
    'o' : '(- o -)',
    'w' : '(> 3 <)',
    'a' : '(* v *)',
  }
  const emojiconfig = {
    'c' : '😀',
    'x' : '😵',
    'o' : '😧',
    'w' : '😎',
    'a' : '🤩'
  }

  const mouseDown = () => {
    setState('a');
  }
  const mouseUp = () => {
    setState('');
    props.reset()
  }
  return (
    <div className={`smiley`} onMouseDown={() => mouseDown()} onMouseUp={() => mouseUp()}>
        {otakuconfig[state || props.state] || ''}
    </div>
  );
}

export default SmileyFace;
