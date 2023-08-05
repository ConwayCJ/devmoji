# Code Formatting Guidelines

## Indentation

- Use **2 spaces** for indentation.

## Braces

- Place opening braces on the **same line** as the corresponding statement.
- Use **consistent indentation** within braces.

Example:
```javascript
const arr = [{
    foo: bar,
    }, {
    foo: bar,
    }]
```

## Line Length

- Except for emoji imports - keep lines within **80 characters**. Long lines can be split into multiple lines for better readability.
- Emoji imports should be limited to 1 line per import location.

Example:

```javascript
import { Emoji1, Emoji2, Emoji3, Emoji4, Emoji5 } from '@mui/icons-material'
import { Emoji1, Emoji2, Emoji3, Emoji4, Emoji5 } from 'react-icons/fa'
import { Emoji1, Emoji2, Emoji3, Emoji4, Emoji5 } from 'react-icons/ai'
```

## Naming Conventions

- Use **camelCase** for variable and function names.
- Use **PascalCase** for class and interface names.
- Use **UPPER_CASE** for constants.

