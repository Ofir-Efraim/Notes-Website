import React, {useState} from "react";
import useStyles from "./EntryStyles";

const Entry = ({handleSubmit}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div className={classes.entryContainer}>
        <input className={classes.inputField} placeholder='Author Name' type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)} />
        <input className={classes.inputField} placeholder='Note Title' type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value)} />
        <textarea style={{height:'9rem'}} className={classes.inputField} placeholder='Write Here' type="text" name="content" value={content} onChange={ (e) => setContent(e.target.value)} />
        <br/>
        <button className={classes.button} onClick={() => {
          handleSubmit(name,title,content)
        }}>
          Save Note
        </button>
    </div>
  )
}

export default Entry