export default function ({ store, redirect, error }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/login')
  }
  const winWidth = window.innerWidth;

  if(winWidth < 767){
    if (store.getters.isLoggedIn) {
      return redirect('/mob')
    }else{
      return redirect('/login')
    }
  }
}
