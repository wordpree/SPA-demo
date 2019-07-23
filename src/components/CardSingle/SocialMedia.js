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
    <a style={styles} href="https://twitter.com/intent/tweet?text=Here we go&url=https://spa-demo-e4d44.firebaseapp.com&hashtags=reactjs,spa">{props.children}</a>
  )
}

export const LkiShareBtn = (props)=>{
  return (
    <a style={styles} href="https://www.linkedin.com/shareArticle?url=https://spa-demo-e4d44.firebaseapp.com&mini=true">{props.children}</a>
  )
}

export const PinShareBtn = (props)=>{
  return (
    <a style={styles} href="//pinterest.com/pin/create/link?url=https://spa-demo-e4d44.firebaseapp.com&media=https://spa-demo-e4d44.firebaseapp.com/static/media/snapshot.60fdb371.jpg&description=SAP with reactjs">{props.children}</a>
  )
}
