<template>
    <div id="HeaderIdx">
        <div id="innerHeaderIdx">
          <div id="top">
            <NuxtLink to="/"><img class="idxTopLogo" src="/images/logo.jpg" alt="logo" name="idxTopLogo" width="211" height="59" border="0" id="idxTopLogo" /></NuxtLink>
            <div class="nav"><NuxtLink to="/">HOME</NuxtLink><span class="side">&nbsp;</span><NuxtLink to="#">English</NuxtLink><span class="side">&nbsp;</span><NuxtLink to="#">中文</NuxtLink></div>
          </div>
          <div id="HeaderNavIdx">
            <div id="innerHeaderNavIdx">
              <ul>
                <li><NuxtLink to="/about" class="current">About US</NuxtLink></li>
                <li><NuxtLink to="/news">News</NuxtLink></li>
                <li><NuxtLink to="/application">Application</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li class="navEnd"><NuxtLink to="/contact">Contact US</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>