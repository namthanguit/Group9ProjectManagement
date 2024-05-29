//add header
function addHeader() {
  document.write(`
  <header>
  <div class="container">
      <div class="logo">
          <a href="#"><img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
                  alt="Company Logo"></a>
      </div>

      <!-- Navigation Bar -->


      <!-- User Info -->
      <div class="user-info">
          <div>
              <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt=""
                  width="30px">
          </div>
          <span>Welcome, John Doe</span>
          <a href="profile.html"><i class="bi bi-person-circle"></i> <span>Profile</span></a> |
          <a href="settings.html"><i class="bi bi-gear"></i> <span>Settings</span></a> |
          <a href="logout.html"><i class="bi bi-box-arrow-in-right"></i> <span>Logout</span> </a>
      </div>
  </div>
</header>
    `);
}
