<?php

class VwpPluginActivate
{
  public static function activate() {
    flush_rewrite_rules();
  }
}
