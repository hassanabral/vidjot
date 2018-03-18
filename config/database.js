if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://hassan:1998108asan@ds117539.mlab.com:17539/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}