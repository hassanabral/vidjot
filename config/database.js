if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://CHANGE_THIS'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
