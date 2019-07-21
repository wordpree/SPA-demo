import React from 'react'

const styles = {
  display:'flex',
  textDecoration:'none',
  color:'inherit',
}

export const FbShareBtn= (props)=>{
  return (
    <a style={styles} href=
    {`https://www.facebook.com/dialog/share?app_id=336368817292380&display=popup&href=https://spa-demo-e4d44.firebaseapp.com/&redirect_uri=https://spa-demo-e4d44.firebaseapp.com/${props.id}`}>{props.children}</a>
  )
}

export const TwShareBtn = (props)=>{
  return (
    <a style={styles} href="https://twitter.com/intent/tweet?text=Hello world&url=https://spa-demo-e4d44.firebaseapp.com&hashtags=reactjs,spa"
  data-size="large">{props.children}</a>
  )
}
