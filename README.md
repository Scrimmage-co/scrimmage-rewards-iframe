## Best practices for setting up Scrimmage Rewards Widget

- Use box at least 360px wide and 640px tall. For mobile,  
  you can use calculated width and height to make it responsive.
  ```css
  .widget {
    width: min(380px, 98vw);
    height: min(640px, 100vh - 100px);
  }
  ```
- 
