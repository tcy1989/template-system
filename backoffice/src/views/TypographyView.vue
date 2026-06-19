<template>
  <div class="view-scroll">
    <div class="view-content">

      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-letter-case" aria-hidden="true" />
          Fonts
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <span class="color-role-label">Heading font</span>
            <select class="font-select">
              <option>Inter</option>
              <option>Poppins</option>
              <option>Playfair Display</option>
              <option>DM Sans</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <span class="color-role-label">Body font</span>
            <select class="font-select">
              <option>Inter</option>
              <option>Lato</option>
              <option>Source Sans 3</option>
              <option>Nunito</option>
            </select>
          </div>
        </div>
      </div>

      <div class="panel-card">
        <div class="panel-card-title">
          <i class="panel-card-title-icon ti ti-text-size" aria-hidden="true" />
          Base font size
        </div>
        <div class="flex items-center gap-3">
          <input type="range" min="12" max="20" value="16" step="1" class="flex-1 accent-primary" />
          <span class="text-xs font-mono" style="color: var(--color-text-muted)">16px</span>
        </div>
        <div class="typography-preview-box">
          <p class="text-xs font-medium mb-1" style="color: var(--color-text-base)">Preview heading</p>
          <p class="text-xs" style="color: var(--color-text-muted)">The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>

    </div>
  </div>
</template>
