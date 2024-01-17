export function Tabs({ buttons, children, ButtonsContainer }) {
  // Re-mapping buttonsContainer -> ButtonsContainer. Because if we pass buttonsContainer, React will search for a built in tag named 'buttonsContainer'. But if we pass ButtonsContainer, React will understand that we are trying to pass a value here. If we pass string, React will search for built in tag, e.g. 'menu','div','ul' etc. Otherwise we can pass custom component also e.g. Section. We can directly recieve ButtonsContainer as prop. That we wont have to re-map.

  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
