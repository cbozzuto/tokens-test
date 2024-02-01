import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: [
    'src/tokens/**/*.json'
  ],
  platforms: {
    less: {
      buildPath: 'src/app/',
      prefix: 'ffToken',
      transformGroup: 'tokens-studio',
      files: [
        {
          destination: 'tokens.less',
          format: 'less/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
