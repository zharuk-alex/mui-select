import React, { Component } from 'react';

const styles = {
  display:'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  fontSize: '18px',
}

export default function DefaultValueComponent ({ value }) {
  return(
    <div style={styles}>{value}</div>
  )
}
