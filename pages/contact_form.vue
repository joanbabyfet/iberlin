<template>
  <div id="innerMainRegion" class="visualContactUS">
    <div id="pageBanner"><img src="/images/visual/contactUsFrom.jpg" width="489" height="489" /></div>
    <div id="bodyMain">
      <div id="innerBodyMain">
        <div class="mainTitle titleBrand"><img src="/images/visual/pageTitle/contactUS.png" width="200" height="35" /></div>
        <div id="subMenu">
          <div id="innerSubMenu"><NuxtLink :to="localePath('/contact')">Information</NuxtLink><span class="side">&nbsp;</span>Contact US Form</div>
        </div>
        <div id="mainContents">
          <h2> Contact US Form</h2>
          <UForm :state="form" class="space-y-4" @submit="submit">
            <UFormGroup label="Contact window" name="name">
              <UInput v-model="form.name" placeholder="Enter Contact window" required />
            </UFormGroup>
            <UFormGroup label="Phone no" name="mobile">
              <UInput v-model="form.mobile" placeholder="Enter Phone no" required />
            </UFormGroup>
            <UFormGroup label="Email" name="email">
              <UInput v-model="form.email" placeholder="Enter Email" required />
            </UFormGroup>
            <UFormGroup label="Message" name="content">
              <UTextarea v-model="form.content" placeholder="Enter Message" required />
            </UFormGroup>
            <UButton type="submit">
              Submit
            </UButton>
          </UForm>
        </div>
      </div>
    </div>
    <div id="mainFooterSide"></div>
  </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
const form = ref({
  name: '',
  mobile: '',
  email: '',
  content: '',
})

const submit = async() => {
  //console.log('submit')
  const { data } = await useFetch('/v1/example/edit', {
    baseURL: config.public.BASE_URL,
    method: 'POST',
    body: {
      params: JSON.stringify(form.value)
    },
  })
  if (data) {
    console.log(data.value)
  }
  else {
    console.log('Contact form could not be send')
  }
}
</script>
