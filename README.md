> [!WARNING]  
> You are most likely going to be banned using this, so please use a alt account while running Vexo-Ware.
  
# Vexo-Ware
An executor made for the web version of Roblox.
  
It uses the common method of writing unsigned bytecode into a Roblox core module script to manage execution.

# Features
1. Fast execution
2. Multi-instance compatibility
3. Supports executing most scripts including Lua Armor scripts
4. Uses extremely fast virtual filesystem that syncs to the external
5. No in-game performance change & no high CPU usage
6. Custom functions like HttpSpy, getting the real address of a Instance, setting & getting globals across all clients, and spoofing instance

The current method of adding **HttpGet** to "game" interferes with some scripts like [dex](https://raw.githubusercontent.com/infyiff/backup/main/dex.lua). To execute dex run this script:
```getgenv().game = workspace.Parent```
  
This will remove **HttpGet** from game! You can use the modified version of dex made for Vexo-Ware inside the released files

# Preview
This is the UI of the version 1.10:
![preview_image](https://github.com/wyclgd/vexo-ware/blob/main/v.1.10-Preview.png?raw=true)
  
The current UNC is ~75%
