package com.trasteoapp.com.service.mapper;

import com.trasteoapp.com.domain.Location;
import com.trasteoapp.com.service.dto.LocationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Location} and its DTO {@link LocationDTO}.
 */
@Mapper(componentModel = "spring")
public interface LocationMapper extends EntityMapper<LocationDTO, Location> {}
