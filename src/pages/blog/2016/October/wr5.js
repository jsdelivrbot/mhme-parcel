import React from 'react'
import Post from '../../../../components/post.js'

const md = require('fs').readFileSync(
  __dirname + './wr5.md',
  { encoding: 'utf-8' },
)

const WeeklyRecap5 = () => <Post source={md} />
export default WeeklyRecap5