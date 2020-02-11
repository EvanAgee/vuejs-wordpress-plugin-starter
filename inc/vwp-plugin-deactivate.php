<?php

class VwpPluginDeactivate
{
  public static function deactivate() {
    flush_rewrite_rules();
  }
}
