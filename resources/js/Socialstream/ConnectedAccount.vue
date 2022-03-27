<template>
  <div>
    <div class="px-3 flex items-center justify-between">
      <div class="flex items-center">
        <facebook-icon v-if="provider === 'facebook'" class="h-6 w-6 mr-2" />
        <google-icon v-if="provider === 'google'" class="h-6 w-6 mr-2" />
        <twitter-icon v-if="provider === 'twitter'" class="h-6 w-6 mr-2" />
        <linked-in-icon v-if="provider === 'linkedin'" class="h-6 w-6 mr-2" />
        <github-icon v-if="provider === 'github'" class="h-6 w-6 mr-2" />
        <git-lab-icon v-if="provider === 'gitlab'" class="h-6 w-6 mr-2" />
        <bitbucket-icon v-if="provider === 'bitbucket'" class="h-6 w-6 mr-2" />

        <div>
          <div class="text-sm font-semibold text-gray-600">
            {{ provider.charAt(0).toUpperCase() + provider.slice(1) }}
          </div>

          <div v-if="createdAt !== null" class="text-xs text-gray-500">
            Connected {{ createdAt }}
          </div>

          <div v-else class="text-xs text-gray-500">
            Not connected.
          </div>
        </div>
      </div>

      <slot name="action" />
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
  props: {
    provider: String,
    createdAt: {
      type: String,
      default: null,
    },
  },
}
</script>
