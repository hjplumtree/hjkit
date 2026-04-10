# Visual Presets

These files define tone presets for the target project.

Use them as:
- project-owned tone starting points
- a source of non-color tokens such as radius, spacing density, type scale, and shadow depth
- a way to keep the same structure while changing the product mood

Rules:
- Keep color values project-owned.
- Treat these files as preset packs, not fixed brand themes.
- Choose one preset per project unless the project explicitly supports multiple moods.
- Use semantic color roles in the app, then map the actual values in the project theme layer.
- Each preset should define body and display fonts, size scale, line height, radius, shadow, spacing density, surface contrast, accent density, and motion scale.

Included presets:
- `calm-pro.css`
- `sharp-product.css`
- `editorial.css`
- `utilitarian.css`
- `premium-calm.css`
