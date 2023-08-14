import { expect, test } from 'vitest'
import { solution } from './1-1'

test('"duplicate" returns false', () => {
  expect(solution('duplicate')).toBeFalsy()
})

test('"abacde" returns true', () => {
  expect(solution('abacde')).toBeTruthy()
})
