import Link from "next/link";



const Navbar = () =>
{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MOVISH</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link href="/" class="nav-link" >Home</Link>
      </li>
      <li class="nav-item">
      <Link href="/api/auth/login" class="nav-link" >Login</Link>
      </li>
      <li class="nav-item">
        <a href="/api/auth/logout" class="nav-link" >Logout</a>
      </li>
      <li class="nav-item">
      <Link href="/movie" class="nav-link" >Movies</Link>
      </li>
      <li class="nav-item">
      <Link href="/wishlist" class="nav-link" >Wishlist</Link>
      </li>
      <li class="nav-item">
      <Link href="/view" class="nav-link" >View</Link>
      </li>
      <li class="nav-item">
      <Link href="/friends" class="nav-link" >Friends</Link>
      </li>
      <li class="nav-item">
      <Link href="/profile" class="nav-link" >Profile</Link>
      </li>
    </ul>
  </div>
</nav>
        </>

    );
}
export default Navbar;