class SidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            <div class="sidebar">
                <div class="sidebar-section">
                    <h2>MAIN</h2>
                    <a href="../Pages/home.html" class="sidebar-link active">
                        <i class="icon-dashboard"></i>
                        Home
                    </a>
                </div>
                <div class="sidebar-section">
                    <a href="#" class="sidebar-link">
                        <i class="icon-apps"></i>
                        Apps
                    </a>
                </div>
                <div class="sidebar-section">
                    <h2>MANAGEMENT</h2>
                    <a href="../Pages/management-NV.html" class="sidebar-link">
                        <i class="icon-employees"></i>
                        Employees
                    </a>
                    <a href="../Pages/meeting-room.html" class="sidebar-link">
                        <i class="icon-clients"></i>
                        Meeting rooms
                    </a>
                    <a href="../Pages/detail-NV.html" class="sidebar-link">
                        <i class="icon-projects"></i>
                        Projects
                    </a>
                    <a href="#" class="sidebar-link">
                        <i class="icon-leads"></i>
                        Leads
                    </a>
                    <a href="#" class="sidebar-link">
                        <i class="icon-tickets"></i>
                        Tickets
                    </a>
                </div>
                <div class="sidebar-section">
                    <h2>HR</h2>
                    <a href="account.html" class="sidebar-link a">
                        <i class="icon-accounts"></i>
                        Accounts
                    </a>
                </div>
            </div>
        `;
    }

    getStyles() {
        return `
            .sidebar {
                width: 187px;
                height: 100%;
                background-color: #0d0c31;
                color: #fff;
                display: flex;
                flex-direction: column;
                padding: 20px;
            }
            .sidebar-section {
                margin-bottom: 20px;
            }
            .sidebar-section h2 {
                font-size: 14px;
                color: #ff4d4d;
                margin: 10px 0;
            }
            .sidebar-link {
                display: flex;
                align-items: center;
                padding: 10px 15px;
                color: #fff;
                text-decoration: none;
                font-size: 16px;
                border-radius: 5px;
            }
            .sidebar-link.active,
            .sidebar-link:hover {
                background-color: #1a1a50;
            }
            .sidebar-link i {
                margin-right: 10px;
            }
            .icon-dashboard:before {
                content: "\\1F4C8";
            }
            .icon-apps:before {
                content: "\\1F4BE";
            }
            .icon-employees:before {
                content: "\\1F465";
            }
            .icon-clients:before {
                content: "\\1F46A";
            }
            .icon-projects:before {
                content: "\\1F680";
            }
            .icon-leads:before {
                content: "\\1F4E6";
            }
            .icon-tickets:before {
                content: "\\1F3AB";
            }
            .icon-accounts:before {
                content: "\\1F4BC";
            }
        `;
    }
}

customElements.define("sidebar-component", SidebarComponent);
