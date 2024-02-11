import { useEffect, useState, useCallback } from "react"
import { Dimensions, ScaledSize } from "react-native"

const useWindowDimensions = (): ScaledSize => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get("window"))

  const onChange = useCallback((result: { window: ScaledSize }) => {
    setWindowDimensions(result.window)
  }, [])

  useEffect(() => {
    const unsubscribe = Dimensions.addEventListener("change", onChange)

    return () => {
      unsubscribe.remove()
    }
  }, [onChange])

  return windowDimensions
}

export { useWindowDimensions }
