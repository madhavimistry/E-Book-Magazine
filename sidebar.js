class SideBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <div class="sidebar-panel">
            <div class="m-item">
                <a href="index" class="nav-item">
                    <img src="./images/home.svg" class="v_panel" alt="home">
                    <h5 class="mb-0">Home</h5>
                </a>
            </div>
            <div class="m-item">
                <a href="#" class="nav-item">
                    <img src="./images/category.svg" class="v_panel" alt="category">
                    <h5 class="mb-0">Category</h5>
                </a>
            </div>
            <div class="m-item">
                <a href="#" class="nav-item">
                    <img src="./images/saved.svg" class="v_panel" alt="saved">
                    <h5 class="mb-0">Saved</h5>
                </a>
            </div>
            <div class="bottom-items">
                <div class="m-item">
                    <a href="#" class="nav-item">
                        <img src="./images/setting.svg" class="v_panel" alt="setting">
                        <h5 class="mb-0">Settings</h5>
                    </a>
                </div>
                <div class="m-item">
                    <a href="#" class="nav-item">
                        <img src="./images/logout.svg" class="v_panel" alt="logout">
                        <h5 class="mb-0">Logout</h5>
                    </a>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define("sidebar-panel", SideBar);
