<template>
    <div id="container">
      <Header></Header>

      <div id="main">
        <div id="bannerSideIdx"></div>
        
        <div id="mainRegion">
          <slot name="default"></slot>
        </div>
      </div>

      <Footer></Footer>
    </div>
</template>