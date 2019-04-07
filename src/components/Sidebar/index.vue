<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>後台</h3>
      <strong>BG</strong>
    </div>

    <ul class="list-unstyled components">
      <li>
        <a
          href="#AdminSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >
          <i class="fas fa-home"></i>
          管理員
        </a>
        <ul
          class="collapse list-unstyled"
          id="AdminSubmenu"
        >
          <li>
            <router-link
              to="/admin/products"
              class="nav-link"
            >
              <i class="fas fa-box-open"></i> 產品列表
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/orders"
              class="nav-link"
            >
              <i class="far fa-list-alt"></i> 訂單列表
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/coupons"
              class="nav-link"
            >
              <i class="fas fa-ticket-alt"></i> 優惠券
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#pageSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >
          <i class="fas fa-copy"></i>
          模擬功能
        </a>
        <ul
          class="collapse list-unstyled"
          id="pageSubmenu"
        >
          <router-link to="/customer_order">
            <i class="fas fa-shopping-cart"></i> 模擬訂單
          </router-link>
        </ul>
      </li>
    </ul>
  </nav>
</template>
