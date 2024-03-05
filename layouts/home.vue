<template>
    <div id="containerIdx">
        <Header></Header>
        
        <div id="bannerSideIdx"></div>
        
        <div id="mainIdx">
            <div id="idxMain">
                <slot name="default"></slot>
            </div>
            <div id="mainFooterSideIdx"></div>
        </div>
        
        <Footer></Footer>
    </div>
</template>