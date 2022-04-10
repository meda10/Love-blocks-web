<template>
  <div>
    <div class="flex flex-row items-center justify-between py-4 text-white">
      <hr class="w-full mr-2" />
      Or
      <hr class="w-full ml-2" />
    </div>

    <div class="flex items-center justify-center">
      <a v-if="$page.props.socialstream.providers.includes('google')" :href="route('oauth.redirect', 'google')">
        <google-icon class="h-6 w-6 mx-2" />
        <span class="sr-only">Google</span>
      </a>

      <a v-if="$page.props.socialstream.providers.includes('github')" :href="route('oauth.redirect', 'github')">
        <github-icon class="h-6 w-6 mx-2" />
        <span class="sr-only">GitHub</span>
      </a>
    </div>
  </div>
</template>

<script>
import GoogleIcon from './ProviderIcons/GoogleIcon'
import GithubIcon from './ProviderIcons/GithubIcon'

export default {
  components: {
    GoogleIcon,
    GithubIcon,
  },
}
</script>
