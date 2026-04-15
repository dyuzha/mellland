export default defineAppConfig({
  ui: {
    colors: {
      // primary: 'blue',
      neutral: 'slate'
    },
    pageSection: {
      slots: {
        title: 'text-secondary',
      }
    },

    pricingPlan: {
      slots: {
        root: 'relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6',
        header: '',
        body: 'flex flex-col min-w-0',
        footer: 'flex flex-col gap-6 items-center',
        titleWrapper: 'flex items-center gap-3',
        title: 'text-highlighted truncate text-2xl sm:text-3xl text-pretty font-semibold',
        description: 'text-muted text-base text-pretty mt-2',
        priceWrapper: 'flex items-center gap-1',
        price: 'text-highlighted text-3xl sm:text-4xl font-semibold',
        discount: 'text-muted line-through text-xl sm:text-2xl',
        billing: 'flex flex-col justify-between min-w-0',
        billingPeriod: 'text-toned truncate text-xs font-medium',
        billingCycle: 'text-muted truncate text-xs font-medium',
        features: 'flex flex-col gap-3 flex-1 mt-6 grow-0',
        feature: 'flex items-center gap-2 min-w-0',
        featureIcon: 'size-5 shrink-0 text-primary',
        featureTitle: 'text-muted text-sm truncate',
        badge: '',
        button: '',
        tagline: 'text-base font-semibold text-default',
        terms: 'text-xs/5 text-muted text-center text-balance'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-inverted',
            title: 'text-inverted',
            description: 'text-dimmed',
            price: 'text-inverted',
            discount: 'text-dimmed',
            billingCycle: 'text-dimmed',
            billingPeriod: 'text-dimmed',
            featureTitle: 'text-dimmed'
          },
          outline: {
            root: 'bg-default ring ring-default'
          },
          soft: {
            root: 'bg-elevated/50'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default'
          }
        },
      },
    }
  }
})
